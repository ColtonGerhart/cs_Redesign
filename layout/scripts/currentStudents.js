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

function loadDiv() {
    var url = window.location.search.substr(1);
    $("#content").load(url);
}

function loadDivProspective(pageUrl, contentUrl) {
    location.href = pageUrl + "?" + contentUrl;
}