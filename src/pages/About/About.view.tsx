import React, { FC } from "react";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

const About: FC = () => (
    <Container>
        <PageMeta title="About" description="About game" />
        <Header currentPath={routes.about.path} />
    </Container>
);

export default About;
