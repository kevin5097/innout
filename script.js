const routineData = {
    jogging: [
        {name: "가벼운 조깅", duration: "5분"},
        {name: "인터벌 달리기", duration: "30초 전력 / 1분 걷기 × 8~10세트"}
    ],
    bodyweight: [
        {name: "스쿼트 점프", reps: "3세트 × 12회"},
        {name: "런지", reps: "3세트 × 12회 양쪽"},
        {name: "푸시업", reps: "3세트 × 15~20회"},
        {name: "플랭크", reps: "3세트 × 45초"},
        {name: "마운틴 클라이머", reps: "3세트 × 30초"}
    ],
    agility: [
        {name: "사이드 스텝", reps: "3세트 × 20초"},
        {name: "버피 테스트", reps: "3세트 × 10회"},
        {name: "콘 드릴 / 사선 달리기", reps: "3세트 × 20m"}
    ]
};

document.getElementById("generateBtn").addEventListener("click", () => {
    const type = document.getElementById("exerciseType").value;
    const level = document.getElementById("level").value;
    const routineDiv = document.getElementById("routine");
    routineDiv.innerHTML = "";

    let selectedData = [];

    if(type === "all") {
        selectedData = [...routineData.jogging, ...routineData.bodyweight, ...routineData.agility];
    } else {
        selectedData = routineData[type];
    }

    // 난이도에 따라 세트/시간 조정
    const adjustedRoutine = selectedData.map(ex => {
        let newEx = {...ex};
        if(level === "medium") {
            if(newEx.reps) newEx.reps = newEx.reps.replace(/3세트/g, "4세트");
            if(newEx.duration) newEx.duration = newEx.duration.replace(/5분/g, "7분");
        } else if(level === "hard") {
            if(newEx.reps) newEx.reps = newEx.reps.replace(/3세트/g, "5세트");
            if(newEx.duration) newEx.duration = newEx.duration.replace(/5분/g, "10분");
        }
        return newEx;
    });

    adjustedRoutine.forEach(ex => {
        const div = document.createElement("div");
        div.className = "exercise";
        div.innerHTML = `<strong>${ex.name}</strong> - ${ex.reps || ex.duration}`;
        routineDiv.appendChild(div);
    });
});
