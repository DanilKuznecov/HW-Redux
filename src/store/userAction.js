export const Increment = 'Increment';
export const Dicrement = 'Dicrement';
export const Reset = 'Reset'

export const countInc = () => ({
    type: Increment      
});
export const countDic = () => ({
    type: Dicrement
});
export const countRes = () => ({
    type: Reset
})

