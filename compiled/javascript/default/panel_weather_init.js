$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Weather");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-date-time" id="default-date-time"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 8, 3, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><div data-bind="attr: {style: sub_style}">	<p class="secondary-info" data-bind="text: dark_sky_daily_low_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="text: dark_sky_daily_high_temperature"></p>	<p class="secondary-info" data-bind="attr: {style: main_style}">&nbsp;Feel:</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature, attr: {style: main_style}"></p>	<p class="secondary-info">&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_low_apparent_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_high_apparent_temperature"></p>	<br>	<p class="secondary-info">Precip:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">%</p>	<p class="secondary-info">&nbsp;(</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">mm)</p></div></div></li>', 10, 3, 9, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baserss-default-rss-weather" id="default-rss-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><h1 class="text" data-bind="html: text, attr:{ style: text_style}"></h1></div></li>', 6, 3, 19, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-wayne-presence" id="default-wayne-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 25, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-jenn-presence" id="default-jenn-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 27, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-kale-presence" id="default-kale-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 29, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-jalynne-presence" id="default-jalynne-presence"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 2, 3, 31, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-weather-frame" id="default-weather-frame"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 20, 14, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-summary" id="default-sensor-dark-sky-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 4, 21, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-hourly-summary" id="default-sensor-dark-sky-hourly-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 8, 4, 25, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-minutely-summary" id="default-sensor-dark-sky-minutely-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 4, 21, 9)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-daily-summary" id="default-sensor-dark-sky-daily-summary"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 8, 4, 25, 9)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-visibility" id="default-sensor-dark-sky-visibility"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 21, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-nearest-storm-distance" id="default-sensor-dark-sky-nearest-storm-distance"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 25, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-nearest-storm-bearing" id="default-sensor-dark-sky-nearest-storm-bearing"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 29, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-wind-speed-kmh" id="default-sensor-dark-sky-wind-speed-kmh"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 21, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-wind-bearing" id="default-sensor-dark-sky-wind-bearing"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 25, 16)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-dark-sky-humidity" id="default-sensor-dark-sky-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 4, 3, 29, 16)
    
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
    
        widgets["default-date-time"] = new baseclock("default-date-time", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: red;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'time_style': 'color: red;'})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_icon': '', 'dark_sky_temperature': '', 'dark_sky_daily_low_temperature': '', 'dark_sky_daily_high_temperature': '', 'dark_sky_apparent_temperature': '', 'dark_sky_daily_low_apparent_temperature': '', 'dark_sky_daily_high_apparent_temperature': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;font-size: 125%;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C'})
    
        widgets["default-rss-weather"] = new baserss("default-rss-weather", "", "default", {'widget_type': 'baserss', 'entity': 'rss_weather_alerts', 'fields': {'title': 'Weather Alerts', 'title2': '', 'text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'text_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'css': {}, 'icons': [], 'static_icons': [], 'interval': 30})
    
        widgets["default-wayne-presence"] = new baseswitch("default-wayne-presence", "", "default", {'widget_type': 'baseswitch', 'entity': 'sensor.presence_wayne_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Wayne', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #4bcdea;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'away': 'AWAY'}, 'icon_on': 'fa-male', 'icon_off': 'fa-male', 'icon_style_active': 'color: #4bcdea;'})
    
        widgets["default-jenn-presence"] = new baseswitch("default-jenn-presence", "", "default", {'widget_type': 'baseswitch', 'entity': 'sensor.presence_jenn_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Jenn', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ea4b82;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'away': 'AWAY'}, 'picture': '/local/photos/jenn.jpg', 'icon_style_active': 'color: #ea4b82;', 'icon_on': 'fa-female', 'icon_off': 'fa-female'})
    
        widgets["default-kale-presence"] = new baseswitch("default-kale-presence", "", "default", {'widget_type': 'baseswitch', 'entity': 'sensor.presence_kale_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Kale', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-male', 'icon_off': 'fa-male'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #4bcdea;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'away': 'AWAY'}, 'icon_on': 'fa-male', 'icon_off': 'fa-male', 'icon_style_active': 'color: #4bcdea;'})
    
        widgets["default-jalynne-presence"] = new baseswitch("default-jalynne-presence", "", "default", {'widget_type': 'baseswitch', 'entity': 'sensor.presence_jalynne_status', 'state_active': 'Home', 'state_inactive': 'Away', 'enable': 0, 'state_text': 1, 'post_service_active': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'home'}, 'post_service_inactive': {'service': 'device_tracker/see', 'dev_id': '', 'location_name': 'not_home'}, 'fields': {'title': 'Jalynne', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-female', 'icon_off': 'fa-female'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ea4b82;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'state_map': {'home': 'HOME', 'away': 'AWAY'}, 'icon_style_active': 'color: #ea4b82;', 'icon_on': 'fa-female', 'icon_off': 'fa-female'})
    
        widgets["default-weather-frame"] = new baseiframe("default-weather-frame", "", "default", {'widget_type': 'baseiframe', 'fields': {'title': 'Radar', 'frame_src': '', 'img_src': '', 'frame_style': ''}, 'icons': [], 'static_css': {'title_style': 'color: #fff;background-color: rgba(0, 0, 0, 0.5);', 'widget_style': 'background-color: #444;'}, 'css': {}, 'static_icons': [], 'refresh': 300, 'img_list': ['https://radblast.wunderground.com/cgi-bin/radar/WUNIDS_map?station=WSO&brand=wui&num=10&delay=100&type=C0R&frame=0&scale=1.000&noclutter=0&showstorms=5&mapx=400&mapy=240&centerx=400&centery=240&transx=0&transy=0&showlabels=1&severe=0&rainsnow=1&lightning=1&smooth=0&rand=25206986&lat=0&lon=0&label=you']})
    
        widgets["default-sensor-dark-sky-summary"] = new basedisplay("default-sensor-dark-sky-summary", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-hourly-summary"] = new basedisplay("default-sensor-dark-sky-hourly-summary", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_hourly_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-minutely-summary"] = new basedisplay("default-sensor-dark-sky-minutely-summary", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_minutely_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-daily-summary"] = new basedisplay("default-sensor-dark-sky-daily-summary", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_daily_summary', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-visibility"] = new basedisplay("default-sensor-dark-sky-visibility", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_visibility', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-nearest-storm-distance"] = new basedisplay("default-sensor-dark-sky-nearest-storm-distance", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_nearest_storm_distance', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-nearest-storm-bearing"] = new basedisplay("default-sensor-dark-sky-nearest-storm-bearing", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_nearest_storm_bearing', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-wind-speed-kmh"] = new basedisplay("default-sensor-dark-sky-wind-speed-kmh", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_wind_speed_kmh', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-wind-bearing"] = new basedisplay("default-sensor-dark-sky-wind-bearing", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_wind_bearing', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-sensor-dark-sky-humidity"] = new basedisplay("default-sensor-dark-sky-humidity", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.dark_sky_humidity', 'sub_entity': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1})
    
        widgets["default-load-main-panel"] = new basenavigate("default-load-main-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Home', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'fa-home', 'dashboard': 'Home'})
    
        widgets["default-load-familyroom-panel"] = new basenavigate("default-load-familyroom-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Family Room', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-windows'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-windows', 'dashboard': 'Panel_FamilyRoom'})
    
        widgets["default-load-theatre-panel"] = new basenavigate("default-load-theatre-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Theatre', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-theater'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-theater', 'dashboard': 'Panel_Theatre'})
    
        widgets["default-load-bedroom-panel"] = new basenavigate("default-load-bedroom-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Bedroom', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'fa-bed', 'dashboard': 'Panel_Bedroom'})
    
        widgets["default-load-weather"] = new basenavigate("default-load-weather", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Weather', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-weather-lightning-rainy'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-weather-lightning-rainy', 'dashboard': 'Panel_Weather'})
    
        widgets["default-load-sensors-panel"] = new basenavigate("default-load-sensors-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Sensors', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-gauge'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-gauge', 'dashboard': 'Panel_Sensors'})
    
        widgets["default-load-settings"] = new basenavigate("default-load-settings", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Settings', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-settings'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-settings', 'dashboard': 'Panel_Settings'})
    
        widgets["default-reload"] = new basenavigate("default-reload", "", "default", {'widget_type': 'basenavigate', 'command': 'location.reload(true)', 'fields': {'title': 'Reload', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': []})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

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
                if (arg != "timeout" && arg != "return")
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
    ha_status(stream_url, "Weather", widgets);

});