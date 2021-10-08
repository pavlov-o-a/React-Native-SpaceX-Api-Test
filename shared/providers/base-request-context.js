import React from 'react';
import ApiRequest from '../entities/api-request';

const BaseRequestContext = React.createContext(new ApiRequest());

export default BaseRequestContext;
