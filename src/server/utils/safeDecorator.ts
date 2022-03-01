export const createSafeDecorator = (errorHandler: Function) => function safe(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>,
): TypedPropertyDescriptor<any> {
    // Запоминаем исходную функцию
    const originalMethod = descriptor.value;
    // Подменяем ее на нашу обертку
    descriptor.value = function SafeWrapper() {
        // Сохраняем аргументы (req и res)
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        // Заворачиваем в асинхронную обертку, чтобы работал try catch
        const wrapper = async () => {
            try {
                // Вызываем исходный метод
                await originalMethod.apply(this, args);
            } catch (err) {
                // Передаем в handler ошибку и Response
                errorHandler.call(this, err, args[1]);
            }
        };
        wrapper();
    };
    // Обновляем дескриптор
    return descriptor;
};
