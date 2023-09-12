// calendar.js
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#datepicker", {
        dateFormat: "m/d/Y",
        maxDate: "today"
    });
});
