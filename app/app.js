/**
 * Created by wuhou on 2017/5/2.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Container from './components/common/Container';
import SignIn from './components/SignIn';

render(<Container/>, document.getElementById('content'));
//render(<SignIn/>, document.getElementById('content'));