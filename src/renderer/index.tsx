import * as React from 'react';
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
    <div><Hello framework="TypeScript" compiler="React" /></div>,
    document.getElementById("app")
);