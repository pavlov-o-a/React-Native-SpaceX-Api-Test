import React from 'react';
import ApiClient from '../core/api-client';

const ApiClientContext = React.createContext(new ApiClient());

export default ApiClientContext;
