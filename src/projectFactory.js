const createProject = (icon,title,desc,deadline,listOfProjects) => {
    if(icon === ""){
        const iconList = [
            "🎉",
            "💾",
            "🗄",
            "📋",
            "🧾",
            "📓",
            "🎁",
            "💻",
            "🖥",
            "💡",
            "⏱",
            "🏖",
            "🏝",
            "🎱",
            "🎮",
            "⭐️",
            "✨",
            "🍪",
            "🍩",
            "🍰",
            "🧃",
            "☕️",
            "🍹",
            "💮",
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