import { memo } from 'react';

function Test1() {
    console.log('rerender test1');
    return <h2>Test</h2>;
}

export default memo(Test1);
