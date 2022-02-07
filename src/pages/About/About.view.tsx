import React, { FC } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

const About: FC = () => (
    <Container>
        <Header currentPath={routes.about.path} />
    </Container>
);

export default About;
