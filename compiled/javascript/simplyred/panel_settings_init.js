$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Settings");
    content_width = (31 + 1) * 32 + 1
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [1, 1],
        widget_base_dimensions: [31, 34],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 32,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-date-time" id="default-date-time"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 6, 3, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><div data-bind="attr: {style: sub_style}">	<p class="secondary-info" data-bind="text: dark_sky_daily_low_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="text: dark_sky_daily_high_temperature"></p>	<p class="secondary-info" data-bind="attr: {style: main_style}">&nbsp;Feel:</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature, attr: {style: main_style}"></p>	<p class="secondary-info">&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_low_apparent_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_high_apparent_temperature"></p>	<br>	<p class="secondary-info">Precip:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">%</p>	<p class="secondary-info">&nbsp;(</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">mm)</p></div></div></li>', 9, 3, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basecalendar-default-calendar-events" id="default-calendar-events"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: row1_style}"></h2><h2 class="value2" data-bind="html: value2, attr:{ style: row2_style}"></h2><h2 class="value3" data-bind="html: value3, attr:{ style: row1_style}"></h2><h2 class="value4" data-bind="html: value4, attr:{ style: row2_style}"></h2></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 9, 3, 16, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basepresence-default-wayne-presence" id="default-wayne-presence"><span class="toggle-area" id="switch_short"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 25, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basepresence-default-jenn-presence" id="default-jenn-presence"><span class="toggle-area" id="switch_short"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 27, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basepresence-default-kale-presence" id="default-kale-presence"><span class="toggle-area" id="switch_short"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 29, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basepresence-default-jalynne-presence" id="default-jalynne-presence"><span class="toggle-area" id="switch_short"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 31, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-top" id="default-label-top"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 32, 2, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-hass" id="default-hass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 1, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-hass-camera" id="default-hass-camera"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 5, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-1" id="default-label-1"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 7, 3, 9, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-1" id="default-kitchen-radio-station-preset-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 16, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-1" id="default-bedroom-radio-station-preset-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 25, 6)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-2" id="default-kitchen-radio-station-preset-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 16, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-2" id="default-bedroom-radio-station-preset-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 25, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-label-2" id="default-label-2"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 15, 7, 1, 9)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-3" id="default-kitchen-radio-station-preset-3"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 16, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-3" id="default-bedroom-radio-station-preset-3"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 25, 10)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-4" id="default-kitchen-radio-station-preset-4"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 16, 12)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-4" id="default-bedroom-radio-station-preset-4"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 25, 12)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-dog" id="default-kitchen-radio-station-preset-dog"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 8, 2, 16, 14)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseslider_thin-default-kitchen-radio-volume-dog" id="default-kitchen-radio-volume-dog"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="slidercontainer"><input type="range" data-bind="attr: {min: MinValue, max: MaxValue, step: StepValue, style: slider_style}, value: SliderValue" ></div><p class="minval" data-bind="text: minValue, attr:{style: minvalue_style}"></p><p class="value" data-bind="text: sliderValue, attr:{style: value_style}"></p><p class="maxval" data-bind="text: maxValue, attr:{style: maxvalue_style}"></p></div></li>', 8, 2, 25, 14)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-default" id="default-default"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-obsidian" id="default-obsidian"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-zen" id="default-zen"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-glassic" id="default-glassic"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-simplyred" id="default-simplyred"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 13, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 1, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-familyroom-panel" id="default-load-familyroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 5, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-theatre-panel" id="default-load-theatre-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 9, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-bedroom-panel" id="default-load-bedroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 13, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-weather" id="default-load-weather"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 17, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-sensors-panel" id="default-load-sensors-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 21, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-settings" id="default-load-settings"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 25, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 29, 20)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-date-time"] = new baseclock("default-date-time", "", "simplyred", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: inherit;text-shadow: 3px 3px 8px #BF7F00, -3px -3px 8px #BF7F00;font-weight: 900;font-style: bold;font-size: 130%;', 'time_style': 'color: inherit;text-shadow: 3px 3px 8px #BF7F00, -3px -3px 8px #BF7F00;font-weight: 900;font-style: bold;font-size: 270%;', 'widget_style': 'box-shadow: none;background-image: url(/css/simplyred/img/goldtexture.jpg);border: ridge 4px gold;border-radius: 10px;'}, 'static_icons': [], 'icons': [], 'css': {}, 'date_style': 'font-size: 130%;', 'time_style': 'font-size: 270%;', 'namespace': 'default'})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "simplyred", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_icon': '', 'dark_sky_temperature': '', 'dark_sky_daily_low_temperature': '', 'dark_sky_daily_high_temperature': '', 'dark_sky_apparent_temperature': '', 'dark_sky_daily_low_apparent_temperature': '', 'dark_sky_daily_high_apparent_temperature': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': ''}, 'css': {}, 'static_css': {'title_style': 'color: #fff;', 'unit_style': 'color: gold;font-size: 90%;', 'main_style': 'color: gold;font-size: 90%;', 'sub_style': 'color: #fff;', 'widget_style': 'box-shadow: none;background: black;border: 5px solid transparent;padding: 15px;-webkit-border-image: url(/css/simplyred/img/goldgradient.png) 20 round;/* Safari 3.1-5 */ -o-border-image: url(/css/simplyred/img/goldgradient.png) 20 round;/* Opera 11-12.1 */ border-image: url(/css/simplyred/img/goldgradient.png) 20 round;border-radius: 10px;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C', 'sub_entity': 'rss_weather_alerts', 'namespace': 'default'})
    
        widgets["default-calendar-events"] = new basecalendar("default-calendar-events", "", "simplyred", {'widget_type': 'basecalendar', 'entity': 'sensor.calendar_events_temp', 'sub_entity': 'sensor.calendar_curbside_pickup', 'fields': {'title': 'Upcoming Events', 'title2': '', 'value': '', 'value2': '', 'value3': '', 'value4': '', 'state_text': ''}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'unit_style': '', 'row1_style': 'color: #00aaff;font-size: 100%;', 'row2_style': 'color: #ffaa00;font-size: 100%;', 'state_text_style': 'color: lightgreen;font-size: 140%;', 'widget_style': ''}, 'css': {'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'state_text_style': 'color: lightgreen;font-size: 140%;', 'namespace': 'default'})
    
        widgets["default-wayne-presence"] = new basepresence("default-wayne-presence", "", "simplyred", {'widget_type': 'basepresence', 'entity': 'sensor.presence_wayne_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Wayne', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #4bcdea;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: white;font-weight: bold;', 'widget_style': ''}, 'state_map': {'Home': '', 'Away': '', 'Extended Away': 'Vacation', 'Just Arrived': 'Arrived', 'Just Left': 'Left'}, 'active_map': ['Home', 'Just Arrived'], 'icon_on': 'fa-male', 'icon_off': 'fa-male', 'icon_style_active': 'color: #4bcdea;', 'namespace': 'default'})
    
        widgets["default-jenn-presence"] = new basepresence("default-jenn-presence", "", "simplyred", {'widget_type': 'basepresence', 'entity': 'sensor.presence_jenn_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Jenn', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ea4b82;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: white;font-weight: bold;', 'widget_style': ''}, 'state_map': {'Home': '', 'Away': '', 'Extended Away': 'Vacation', 'Just Arrived': 'Arrived', 'Just Left': 'Left'}, 'active_map': ['Home', 'Just Arrived'], 'icon_style_active': 'color: #ea4b82;', 'icon_on': 'fa-female', 'icon_off': 'fa-female', 'namespace': 'default'})
    
        widgets["default-kale-presence"] = new basepresence("default-kale-presence", "", "simplyred", {'widget_type': 'basepresence', 'entity': 'sensor.presence_kale_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Kale', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #4bcdea;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: white;font-weight: bold;', 'widget_style': ''}, 'state_map': {'Home': '', 'Away': '', 'Extended Away': 'Vacation', 'Just Arrived': 'Arrived', 'Just Left': 'Left'}, 'active_map': ['Home', 'Just Arrived'], 'icon_style_active': 'color: #4bcdea;', 'icon_on': 'fa-male', 'icon_off': 'fa-male', 'namespace': 'default'})
    
        widgets["default-jalynne-presence"] = new basepresence("default-jalynne-presence", "", "simplyred", {'widget_type': 'basepresence', 'entity': 'sensor.presence_jalynne_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Jalynne', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': 1}, 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ea4b82;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: white;font-weight: bold;', 'widget_style': ''}, 'state_map': {'Home': '', 'Away': '', 'Extended Away': 'Vacation', 'Just Arrived': 'Arrived', 'Just Left': 'Left'}, 'active_map': ['Home', 'Just Arrived'], 'icon_style_active': 'color: #ea4b82;', 'icon_on': 'fa-female', 'icon_off': 'fa-female', 'namespace': 'default'})
    
        widgets["default-label-top"] = new basedisplay("default-label-top", "", "simplyred", {'widget_type': 'basedisplay', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': '', 'container_style': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'namespace': 'default'})
    
        widgets["default-hass"] = new basenavigate("default-hass", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'HA Web', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-home-assistant', 'dashboard': 'Panel_Hass', 'namespace': 'default'})
    
        widgets["default-hass-camera"] = new basenavigate("default-hass-camera", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Cameras', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-camera'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-camera', 'dashboard': 'Panel_Hass-camera', 'namespace': 'default'})
    
        widgets["default-label-1"] = new basedisplay("default-label-1", "", "simplyred", {'widget_type': 'basedisplay', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': '', 'container_style': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-1"] = new baseselect_thin("default-kitchen-radio-station-preset-1", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p1', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p1'}, 'fields': {'title': 'Kitchen Radio Preset 1', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-1"] = new baseselect_thin("default-bedroom-radio-station-preset-1", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p1', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p1'}, 'fields': {'title': 'Bedroom Radio Preset 1', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-2"] = new baseselect_thin("default-kitchen-radio-station-preset-2", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p2', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p2'}, 'fields': {'title': 'Kitchen Radio Preset 2', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-2"] = new baseselect_thin("default-bedroom-radio-station-preset-2", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p2', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p2'}, 'fields': {'title': 'Bedroom Radio Preset 2', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-label-2"] = new basedisplay("default-label-2", "", "simplyred", {'widget_type': 'basedisplay', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': '', 'container_style': ''}, 'css': {}, 'icons': [], 'static_icons': [], 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-3"] = new baseselect_thin("default-kitchen-radio-station-preset-3", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p3', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p3'}, 'fields': {'title': 'Kitchen Radio Preset 3', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-3"] = new baseselect_thin("default-bedroom-radio-station-preset-3", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p3', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p3'}, 'fields': {'title': 'Bedroom Radio Preset 3', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-4"] = new baseselect_thin("default-kitchen-radio-station-preset-4", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p4', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p4'}, 'fields': {'title': 'Kitchen Radio Preset 4', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-4"] = new baseselect_thin("default-bedroom-radio-station-preset-4", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p4', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p4'}, 'fields': {'title': 'Bedroom Radio Preset 4', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-dog"] = new baseselect_thin("default-kitchen-radio-station-preset-dog", "", "simplyred", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_pdog', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_pdog'}, 'fields': {'title': 'Dog Work Day Station', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'select_style': 'background-color: #999;color:black;', 'widget_style': '', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-volume-dog"] = new baseslider_thin("default-kitchen-radio-volume-dog", "", "simplyred", {'widget_type': 'baseslider_thin', 'entity': 'input_number.kitchen_speaker_volume_dog', 'post_service': {'service': 'input_number/set_value', 'entity_id': 'input_number.kitchen_speaker_volume_dog'}, 'fields': {'title': 'Dog Work Day Volume', 'title2': '', 'SliderValue': '', 'MinValue': '', 'MaxValue': '', 'sliderValue': '', 'minValue': '', 'maxValue': '', 'StepValue': ''}, 'icons': [], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'minvalue_style': 'color: gold;font-weight: 900;', 'maxvalue_style': 'color: gold;font-weight: 900;', 'value_style': 'color: gold;font-weight: 500;font-size: 250%;', 'slider_style': '', 'widget_style': ''}, 'namespace': 'default'})
    
        widgets["default-default"] = new basenavigate("default-default", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Default', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'dashboard': 'Panel_Settings', 'skin': 'default', 'namespace': 'default'})
    
        widgets["default-obsidian"] = new basenavigate("default-obsidian", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Obsidian', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'dashboard': 'Panel_Settings', 'skin': 'obsidian', 'namespace': 'default'})
    
        widgets["default-zen"] = new basenavigate("default-zen", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Zen', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'dashboard': 'Panel_Settings', 'skin': 'zen', 'namespace': 'default'})
    
        widgets["default-glassic"] = new basenavigate("default-glassic", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Glassic', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'dashboard': 'Panel_Settings', 'skin': 'glassic', 'namespace': 'default'})
    
        widgets["default-simplyred"] = new basenavigate("default-simplyred", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Simply Red', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'dashboard': 'Panel_Settings', 'skin': 'simplyred', 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basenavigate("default-load-main-panel", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Home', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'fa-home', 'dashboard': 'Home', 'namespace': 'default'})
    
        widgets["default-load-familyroom-panel"] = new basenavigate("default-load-familyroom-panel", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Family Room', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-windows'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-windows', 'dashboard': 'Panel_FamilyRoom', 'namespace': 'default'})
    
        widgets["default-load-theatre-panel"] = new basenavigate("default-load-theatre-panel", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Theatre', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-theater'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-theater', 'dashboard': 'Panel_Theatre', 'namespace': 'default'})
    
        widgets["default-load-bedroom-panel"] = new basenavigate("default-load-bedroom-panel", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Bedroom', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'fa-bed', 'dashboard': 'Panel_Bedroom', 'namespace': 'default'})
    
        widgets["default-load-weather"] = new basenavigate("default-load-weather", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Weather', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-weather-lightning-rainy'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-weather-lightning-rainy', 'dashboard': 'Panel_Weather', 'namespace': 'default'})
    
        widgets["default-load-sensors-panel"] = new basenavigate("default-load-sensors-panel", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Sensors', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-gauge'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-gauge', 'dashboard': 'Panel_Sensors', 'namespace': 'default'})
    
        widgets["default-load-settings"] = new basenavigate("default-load-settings", "", "simplyred", {'widget_type': 'basenavigate', 'fields': {'title': 'Settings', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-settings'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'icon_inactive': 'mdi-settings', 'dashboard': 'Panel_Settings', 'namespace': 'default'})
    
        widgets["default-reload"] = new basenavigate("default-reload", "", "simplyred", {'widget_type': 'basenavigate', 'command': 'location.reload(true)', 'fields': {'title': 'Reload', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: gold;font-weight: 900;', 'title2_style': 'color: #fff;', 'widget_style': ''}, 'css': {'icon_active_style': 'color: gold;', 'icon_inactive_style': 'color: gold;'}, 'static_icons': [], 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Settings", widgets);

});