import React, {FC} from 'react';

import Container from "@/components/Container";
import Header from "@/components/Header";
import {routes} from '@/config/routes/routes';

const currentRoute = `/#${routes.profile.path}`;

const Profile: FC = () => {
    return (
        <Container>
            <Header currentRoute={currentRoute} />
        </Container>
    );
};

export default Profile;