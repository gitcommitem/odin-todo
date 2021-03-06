const createProject = (icon,title,desc,deadline,listOfProjects) => {
    if(icon === ""){
        const iconList = [
            "๐",
            "๐พ",
            "๐",
            "๐",
            "๐งพ",
            "๐",
            "๐",
            "๐ป",
            "๐ฅ",
            "๐ก",
            "โฑ",
            "๐",
            "๐",
            "๐ฑ",
            "๐ฎ",
            "โญ๏ธ",
            "โจ",
            "๐ช",
            "๐ฉ",
            "๐ฐ",
            "๐ง",
            "โ๏ธ",
            "๐น",
            "๐ฎ",
        ]

        let randomIcon = Math.floor(Math.random()*iconList.length);

        icon = iconList[randomIcon];
    };

    let todos = [];
    let id = 0;

    if(listOfProjects.length !== 0){
        const lastEntryId = listOfProjects[listOfProjects.length-1].id;
        id = lastEntryId + 1;
    };

    return {icon,title,desc,deadline,todos,id};
};

export {createProject};