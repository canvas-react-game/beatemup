import React, { FC } from "react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export function withRouter(Component: FC): FC {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    return () => (
        <Router history={history}>
            <Component />
        </Router>
    )
}