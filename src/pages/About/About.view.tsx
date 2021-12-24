import React, { FC } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

const currentPath = `/#${routes.about.path}`;

const About: FC = () => (
    <Container>
        <Header currentPath={currentPath} />
    </Container>
);

export default About;
