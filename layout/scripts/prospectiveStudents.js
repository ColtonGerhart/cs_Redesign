function mathUndergradClick(){
    if ($("#prospectiveMathUndergraduate").is(':visible')) {
        $("#prospectiveMathUndergraduate").hide();
        $("#prospectiveCSUndergraduate").hide();
        $("#prospectiveCSGraduate").hide();
    }
    else {
        $("#prospectiveMathUndergraduate").show();
        $("#prospectiveCSUndergraduate").hide();
        $("#prospectiveCSGraduate").hide();
    }
}

function csUndergradClick() {
    if ($("#prospectiveCSUndergraduate").is(':visible')) {
        $("#prospectiveMathUndergraduate").hide();
        $("#prospectiveCSUndergraduate").hide();
        $("#prospectiveCSGraduate").hide();
    }
    else {
        $("#prospectiveMathUndergraduate").hide();
        $("#prospectiveCSUndergraduate").show();
        $("#prospectiveCSGraduate").hide();
    }
}

function csGradClick() {
    if ($("#prospectiveCSGraduate").is(':visible')) {
        $("#prospectiveMathUndergraduate").hide();
        $("#prospectiveCSUndergraduate").hide();
        $("#prospectiveCSGraduate").hide();
    }
    else {
        $("#prospectiveMathUndergraduate").hide();
        $("#prospectiveCSUndergraduate").hide();
        $("#prospectiveCSGraduate").show();
    }
}

function loadDiv(url) {
    $("#content").load(url);
}

function loadDivProspective(pageUrl) {
    location.href = pageUrl;
}