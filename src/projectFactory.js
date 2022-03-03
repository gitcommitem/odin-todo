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

    if(title === ""){
        title = "Untitled Project"
    };

    if(desc === ""){
        desc = "Click here to add comments/notes"
    };

    if(deadline === ""){
        deadline = "Click here to set a deadline"
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