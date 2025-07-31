import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "MetaFlip dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1f9q7t6tv9vfq6e5t4klhwsqayvnzpfmkza63v2v7e4rvlcmswq9sl78jjm",
            cw20: "andr1znxuscna50ctygtyl3p9emru628s7rg3acfdmdtathu2qkqe6w4qz5jcf5",
            name: "MetaFlip dApp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
