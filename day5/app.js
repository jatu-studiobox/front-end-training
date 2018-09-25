// Generate GUID function
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// Add Widget Chart
(function ($) {
    if (!$) {
        console.error('codecamp plugin required jquery');
        return;
    }
    $.fn.addChart = function (controlNumber, charttype, interval, theme) {
        // Generate new GUID
        let uuid = guid();
        controlNumber = uuid;
        //alert(uuid);
        //debugger;
        
        // Split for Chart BorderColor and BackgroundColor
        let chartColor = theme.split('|');
        // Gathering Container
        let element_container = this;

        let strHtml = '<div class="col-md-4 mb-3 border" id="div' + controlNumber + '">';
        strHtml += '<div class="modal-header chartBar">';
        strHtml += '<button type="button" id="btnRemoveChart' + controlNumber + '" class="close" data-dismiss="modal" aria-label="Close">&times;</button>';
        strHtml += '</div>';
        strHtml += '<canvas id="chart' + controlNumber + '"></canvas>';
        strHtml += '</div>';

        // Appent Chart Container to main container
        $(element_container).append(strHtml);

        // Add Chart
        $('#chart' + controlNumber).realtimeChart(charttype, parseInt(interval) * 1000, {
            dataset: {
                //label: 'Widget ' + controlNumber,
                label: 'Widget Title',
                borderColor: chartColor[0],
                backgroundColor: chartColor[1]
            }
        });

        $('#btnRemoveChart' + controlNumber).click(function () {
            $('#div' + controlNumber).remove();
        });
    };
})(jQuery);

// Button 'Add Chart Line' Click
$('#btnAddChartLine').click(function () {
    // Gathering values for Widget
    let chartTimeValue = $('#chartTime').val();
    let colorValue = $('#chartTheme').val();
    let controlNumber = $('#txtNumber').val();

    // Call Widget
    $('#chart_container').addChart(controlNumber, 'line', chartTimeValue, colorValue);

    // Auto close modal
    $('#dialogModalAddWidget').modal('hide');
});

// Button 'Add Chart Bar' Click
$('#btnAddChartBar').click(function () {
    // Gathering values for Widget
    let chartTimeValue = $('#chartTime').val();
    let colorValue = $('#chartTheme').val();
    let controlNumber = $('#txtNumber').val();

    // Call Widget
    $('#chart_container').addChart(controlNumber, 'bar', chartTimeValue, colorValue);

    // Auto close modal
    $('#dialogModalAddWidget').modal('hide');
});

$('#testContext').contextPopup({
    title: 'Some title',
    items: [
        { label: 'My Item', icon: '/some/icon1.png', action: function () { alert('hi'); } },
        { label: 'Item #2', icon: '/some/icon2.png', action: function () { alert('yo'); } },
        null, // divider
        { label: 'Blahhhh', icon: '/some/icon3.png', action: function () { alert('bye'); }, isEnabled: function () { return false; } },
    ]
});