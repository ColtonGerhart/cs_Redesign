function mathUndergradClick() {
    if ($("#currentMathUndergraduate").is(':visible')) {
        $("#currentMathUndergraduate").hide();
        $("#currentCSUndergraduate").hide();
        $("#currentCSGraduate").hide();
    }
    else {
        $("#currentMathUndergraduate").show();
        $("#currentCSUndergraduate").hide();
        $("#currentCSGraduate").hide();
    }
}

function csUndergradClick() {
    if ($("#currentCSUndergraduate").is(':visible')) {
        $("#currentMathUndergraduate").hide();
        $("#currentCSUndergraduate").hide();
        $("#currentCSGraduate").hide();
    }
    else {
        $("#currentMathUndergraduate").hide();
        $("#currentCSUndergraduate").show();
        $("#currentCSGraduate").hide();
    }
}

function csGradClick() {
    if ($("#currentCSGraduate").is(':visible')) {
        $("#currentMathUndergraduate").hide();
        $("#currentCSUndergraduate").hide();
        $("#currentCSGraduate").hide();
    }
    else {
        $("#currentMathUndergraduate").hide();
        $("#currentCSUndergraduate").hide();
        $("#currentCSGraduate").show();
    }
}

function loadDiv(url) {
    $("#content").load(url);
}

function loadDivcurrent(pageUrl) {
    location.href = pageUrl;
}

function removeWhitespace() {
    loadDiv('/pages/BS_Math/entranceRequirements.html');
}