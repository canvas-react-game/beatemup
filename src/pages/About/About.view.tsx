import React, {FC} from 'react';

import Container from "@/components/Container";
import Header from "@/components/Header";
import {routes} from '@/config/routes/routes';

const currentRoute = `/#${routes.about.path}`;

const About: FC = () => {
    return (
        <Container>
            <Header currentRoute={currentRoute} />
        </Container>
    );
};

export default About;