export type formTasktType = {
    title?: string;
    description?: string;
    time?: string;
    status?: string;
    id?: string;
};

export type userInfoType = {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
};
export type TodoStore = {
    ListTAsk: formTasktType[];
    usersinfo: userInfoType | null;
    GetTask: (item: formTasktType[]) => void;
    add: (item: formTasktType) => void;
    Update: (id: string, form: formTasktType) => void;
    GetinfoUser: () => void;
};


export type formUserType = {
    firstname?: string,
    lastname?: string,
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}
