import React, { FC, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { APP_NAME } from '../../utils';

interface MetaComponentProps {
    pageTitle?: string;
    description?: string;
}

const MetaComponent: FC<MetaComponentProps> = (props) => {

    const {
        pageTitle,
        description,
    } = props;

    const updateDescription = (description: string): ReactNode => (
        <meta name="description" content={description} />
    );

    return (
        <Helmet>
            <title>
                {pageTitle ?? APP_NAME}
            </title>
            {(description)
                ? updateDescription(description)
                : null
            }
        </Helmet>
    );

};

export default MetaComponent;