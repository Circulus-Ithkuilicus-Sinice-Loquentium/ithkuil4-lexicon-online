export type Spec = {
    "BSC": string,
    "CTE": string,
    "CSV": string,
    "OBJ": string
};

export type Root = {
    root: string,
    refers: string[]
    stems?: [
        Spec | string,
        Spec | string,
        Spec | string,
    ]
}