const routineData = {
    jogging: [
        {name: "가벼운 조깅", duration: "5분", benefit: "심폐 지구력 향상, 워밍업"},
        {name: "인터벌 달리기", duration: "30초 전력 / 1분 걷기 × 8~10세트", benefit: "폭발적 스피드와 지구력 강화"}
    ],
    bodyweight: [
        {name: "스쿼트 점프", reps: "3세트 × 12회", benefit: "하체 폭발력 및 점프력 강화"},
        {name: "런지", reps: "3세트 × 12회 양쪽", benefit: "하체 근력과 균형 능력 향상"},
        {name: "푸시업", reps: "3세트 × 15~20회", benefit: "상체 근력 강화"},
        {name: "플랭크", reps: "3세트 × 45초", benefit: "코어 안정성 향상"},
        {name: "마운틴 클라이머", reps: "3세트 × 30초", benefit: "심폐 지구력과 코어 강화"}
    ],
    agility: [
        {name: "사이드 스텝", reps: "3세트 × 20초", benefit: "측면 민첩성 향상"},
        {name: "버피 테스트", reps: "3세트 × 10회", benefit: "전신 근력과 심폐 지구력"},
        {name: "콘 드릴 / 사선 달리기", reps: "3세트 × 20m", benefit: "코트 위 이동 속도와 민첩성 향상"}
    ]
};

document.getElementById("generateBtn").addEventListener("click", () => {
    const type = document.getElementById("exerciseType").value;
    const level = document.getElementById("level").value;
    const routineDiv = document.getElementById("routine");
    routineDiv.innerHTML = "";

    let selectedData = [];
    if(type === "all") selectedData = [...routineData.jogging, ...routineData.bodyweight, ...routineData.agility];
    else selectedData = routineData[type];

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
        div.className = "exercise-card";
        div.innerHTML = `
            <label>
                <input type="checkbox">
                <div class="exercise-info">
                    <strong>${ex.name}</strong> - ${ex.reps || ex.duration} <br>
                    <em>효과: ${ex.benefit}</em>
                </div>
            </label>
        `;
        routineDiv.appendChild(div);
    });
});
