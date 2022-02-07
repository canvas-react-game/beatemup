import React, { FC } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

const Forum: FC = () => (
    <Container>
        <Header currentPath={routes.forum.path} />
    </Container>
);

export default Forum;
