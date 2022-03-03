const createProject = (icon,title,desc,deadline) => {
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

    return {icon,title,desc,deadline,todos};
};

export {createProject};