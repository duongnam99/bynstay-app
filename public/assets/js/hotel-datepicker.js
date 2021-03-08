var format = 'd/m/Y';
var altFormat = 'd/m/Y';
if($('#check-in-fly').length > 0){
    var form_date_from = flatpickr('#check-in-fly', {
        mode: "range",
        altFormat: "d/m/Y",
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        position: 'above',
        minDate: "today",
        wrap: true,
        onReady: function (selectedDates, dateStr, instance) {
            var checkin = $('#check-in').val(),
                checkout= $('#check-out').val(),
                fromDate = shop.dateConvert(checkin),
                toDate = shop.dateConvert(checkout);
            if(checkout == ''){
                toDate.setDate(fromDate.getDate()+1);
            }
            var selectedDates = [fromDate, toDate];
            instance.setDate(selectedDates);
            setDateInput2(selectedDates, 1);
        },
        onChange: function (selectedDates, dateStr, instance) {
            form_date_to.setDate(selectedDates);
            setDateInput2(selectedDates, 1);

            instance.close();
            form_date_to.set('minDate', selectedDates[0]);
            form_date_to.open();
        }
        // config
    });

    var form_date_to = flatpickr('#check-out-fly', {
        mode: "range",
        altFormat: "d/m/Y",
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        position: 'above',
        wrap: true,
        onReady: function (selectedDates, dateStr, instance) {
            var checkin = $('#check-in').val(),
                checkout= $('#check-out').val(),
                fromDate = shop.dateConvert(checkin),
                toDate = shop.dateConvert(checkout);
            if(checkout == ''){
                toDate.setDate(fromDate.getDate()+1);
            }
            var selectedDates = [fromDate, toDate];

            instance.setDate(selectedDates);
            setDateInput2(selectedDates, 2);
        },
        onChange: function (selectedDates, dateStr, instance) {
            var checkin = $('#check-in').val();
            if(checkin != '' && selectedDates[1]) {
                var fromDate = shop.dateConvert(checkin);
                selectedDates = [fromDate, selectedDates[1]];

                form_date_from.setDate(selectedDates);
                instance.setDate(selectedDates);
                setDateInput2(selectedDates, 2);
            }
        },
        onClose: function (selectedDates, dateStr, instance) {
            if(selectedDates.length > 0) {
                form_date_from.setDate(selectedDates);
                setDateInput2(selectedDates, 2);
            }
        }
        // config
    });
}else if($('#check-in').length > 0) {
    var form_date_from = flatpickr('#check-in', {
        mode: "range",
        altFormat: "d/m/Y",
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        onReady: function (selectedDates, dateStr, instance) {
            var fromDate = shop.dateConvert($('#check-in').val());
            var toDate = shop.dateConvert($('#check-out').val());
            var selectedDates = [fromDate, toDate];

            instance.setDate(selectedDates);
            setDateInput2(selectedDates, 1);
        },
        onChange: function (selectedDates, dateStr, instance) {
            form_date_to.setDate(selectedDates);
            setDateInput2(selectedDates, 1);

            instance.close();
            form_date_to.set('minDate', selectedDates[0]);
            form_date_to.open();
        }
        // config
    });

    var form_date_to = flatpickr('#check-out', {
        mode: "range",
        altFormat: "d/m/Y",
        dateFormat: format,
        showMonths: 2,
        locale: "vn",
        minDate: "today",
        onReady: function (selectedDates, dateStr, instance) {
            var checkin = $('#check-in').val(),
                checkout= $('#check-out').val(),
                fromDate = shop.dateConvert(checkin),
                toDate = shop.dateConvert(checkout),
                selectedDates = [fromDate, toDate];
            if(checkin != '' && checkout != '') {
                instance.setDate(selectedDates);
                setDateInput2(selectedDates, 2);
            }
        },
        onChange: function (selectedDates, dateStr, instance) {
            var checkin = $('#check-in').val();
            if(checkin != '' && selectedDates[1]) {
                var fromDate = shop.dateConvert(checkin);
                selectedDates = [fromDate, selectedDates[1]];

                form_date_from.setDate(selectedDates);
                instance.setDate(selectedDates);
                setDateInput2(selectedDates, 2);
            }
        },
        onClose: function (selectedDates, dateStr, instance) {
            if(selectedDates.length > 0) {
                form_date_from.setDate(selectedDates);
                setDateInput2(selectedDates, 2);
            }
        }
        // config
    });
}

function setDateInput2(selectedDates, type) {
    var days = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    if(selectedDates[0]) {
        $('#check-in').val(flatpickr.formatDate(selectedDates[0], altFormat));

        $('.date-to').html(days[flatpickr.formatDate(selectedDates[0], 'w')]);
        $('.month-to').html(flatpickr.formatDate(selectedDates[0], 'd')+' Thg '+flatpickr.formatDate(selectedDates[0], 'm Y'));
    }
    if(selectedDates[1]) {
        $('#check-out').val(flatpickr.formatDate(selectedDates[1], altFormat));

        $('.date-end').html(days[flatpickr.formatDate(selectedDates[1], 'w')]);
        $('.month-end').html(flatpickr.formatDate(selectedDates[1], 'd')+' Thg '+flatpickr.formatDate(selectedDates[1], 'm Y'));
    }
    console.log(selectedDates);
}

function setDateInput(selectedDates, type) {
    console.log(selectedDates);

    if(selectedDates[0]) {
        $('#check-in').val(flatpickr.formatDate(selectedDates[0], altFormat));
    }
    if(selectedDates[1]) {
        $('#check-out').val(flatpickr.formatDate(selectedDates[1], altFormat));
    }
}
