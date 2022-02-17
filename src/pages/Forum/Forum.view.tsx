import React, { FC } from "react";

import Container from "@/components/Container";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import { routes } from "@/config/routes/routes";

const Forum: FC = () => (
    <Container>
        <PageMeta title="Forum" description="Game forum" />
        <Header currentPath={routes.about.path} />
    </Container>
);

export default Forum;
