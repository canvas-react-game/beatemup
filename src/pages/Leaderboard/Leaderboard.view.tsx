import React, {FC} from 'react';

import Container from "@/components/Container";
import Header from "@/components/Header";
import {routes} from '@/config/routes/routes';

const currentPath = `/#${routes.leaderboard.path}`;

const Leaderboard: FC = () => {
    return (
        <Container>
            <Header currentPath={currentPath} />
        </Container>
    );
};

export default Leaderboard;