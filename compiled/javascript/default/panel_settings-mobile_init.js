$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Settings");
    content_width = (28 + 1) * 12 + 1
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [1, 1],
        widget_base_dimensions: [28, 28],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 12,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baserss-default-rss-weather" id="default-rss-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><h1 class="text" data-bind="html: text, attr:{ style: text_style}"></h1><h1 class="description" data-bind="html: description, attr:{ style: text_style}"></h1></div></li>', 12, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><div data-bind="attr: {style: sub_style}">	<p class="secondary-info" data-bind="text: dark_sky_overnight_low_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="text: dark_sky_daytime_high_temperature"></p>	<p class="secondary-info" data-bind="attr: {style: main_style}">&nbsp;Feel:</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature, attr: {style: main_style}"></p>	<p class="secondary-info">&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_overnight_low_apparent_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="html: dark_sky_daytime_high_apparent_temperature"></p>	<br>	<p class="secondary-info">Precip:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">%</p>	<p class="secondary-info">&nbsp;(</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">mm)</p></div></div></li>', 12, 3, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-hass" id="default-hass"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-hass-camera" id="default-hass-camera"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-default" id="default-default"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 4, 3, 9, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-simplyred" id="default-simplyred"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-glassic" id="default-glassic"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-zen" id="default-zen"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-obsidian" id="default-obsidian"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 8)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseslider_thin-default-kitchen-radio-volume-favourite" id="default-kitchen-radio-volume-favourite"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="slidercontainer"><input type="range" data-bind="attr: {min: MinValue, max: MaxValue, step: StepValue, style: slider_style}, value: SliderValue" ></div><p class="minval" data-bind="text: minValue, attr:{style: minvalue_style}"></p><p class="value" data-bind="text: sliderValue, attr:{style: value_style}"></p><p class="maxval" data-bind="text: maxValue, attr:{style: maxvalue_style}"></p></div></li>', 6, 2, 1, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseslider_thin-default-bedroom-radio-volume-favourite" id="default-bedroom-radio-volume-favourite"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="slidercontainer"><input type="range" data-bind="attr: {min: MinValue, max: MaxValue, step: StepValue, style: slider_style}, value: SliderValue" ></div><p class="minval" data-bind="text: minValue, attr:{style: minvalue_style}"></p><p class="value" data-bind="text: sliderValue, attr:{style: value_style}"></p><p class="maxval" data-bind="text: maxValue, attr:{style: maxvalue_style}"></p></div></li>', 6, 2, 7, 11)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-1" id="default-kitchen-radio-station-preset-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 1, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-1" id="default-bedroom-radio-station-preset-1"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 7, 13)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-2" id="default-kitchen-radio-station-preset-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 1, 15)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-2" id="default-bedroom-radio-station-preset-2"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 7, 15)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-3" id="default-kitchen-radio-station-preset-3"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 1, 17)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-3" id="default-bedroom-radio-station-preset-3"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 7, 17)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-4" id="default-kitchen-radio-station-preset-4"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 1, 19)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-bedroom-radio-station-preset-4" id="default-bedroom-radio-station-preset-4"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 7, 19)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseselect_thin-default-kitchen-radio-station-preset-dog" id="default-kitchen-radio-station-preset-dog"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><div class="styled-select" data-bind="attr:{style: selectcontainer_style}">  <select data-bind="options: inputoptions, value: selectedoption, attr:{style: select_style}">  </select></div></div></li>', 6, 2, 1, 21)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseslider_thin-default-kitchen-radio-volume-dog" id="default-kitchen-radio-volume-dog"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><div class="slidercontainer"><input type="range" data-bind="attr: {min: MinValue, max: MaxValue, step: StepValue, style: slider_style}, value: SliderValue" ></div><p class="minval" data-bind="text: minValue, attr:{style: minvalue_style}"></p><p class="value" data-bind="text: sliderValue, attr:{style: value_style}"></p><p class="maxval" data-bind="text: maxValue, attr:{style: maxvalue_style}"></p></div></li>', 6, 2, 7, 21)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 24)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-familyroom-panel" id="default-load-familyroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 24)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-theatre-panel" id="default-load-theatre-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 24)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-bedroom-panel" id="default-load-bedroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 24)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-sensors-panel" id="default-load-sensors-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 27)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-weather" id="default-load-weather"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 27)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-settings" id="default-load-settings"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 27)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 27)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-rss-weather"] = new baserss("default-rss-weather", "", "default", {'widget_type': 'baserss', 'entity': 'rss_weather_alerts', 'fields': {'title': '', 'title2': '', 'text': '', 'description': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'text_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;font-size: 75%;'}, 'css': {}, 'icons': [], 'static_icons': [], 'widget_style': 'font-size: 75%;', 'interval': 30, 'namespace': 'default'})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_icon': '', 'dark_sky_temperature': '', 'dark_sky_overnight_low_temperature': '', 'dark_sky_daytime_high_temperature': '', 'dark_sky_apparent_temperature': '', 'dark_sky_overnight_low_apparent_temperature': '', 'dark_sky_daytime_high_apparent_temperature': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;font-size: 125%;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;font-size: 75%;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C', 'widget_style': 'font-size: 75%;', 'namespace': 'default'})
    
        widgets["default-hass"] = new basenavigate("default-hass", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'HA Web', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-home-assistant'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-home-assistant', 'dashboard': 'Panel_Hass-mobile', 'namespace': 'default'})
    
        widgets["default-hass-camera"] = new basenavigate("default-hass-camera", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Cameras', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-camera'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-camera', 'dashboard': 'Panel_Hass-mobile-camera', 'namespace': 'default'})
    
        widgets["default-default"] = new basenavigate("default-default", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Default', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Panel_Settings-mobile', 'skin': 'default', 'namespace': 'default'})
    
        widgets["default-simplyred"] = new basenavigate("default-simplyred", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Simply Red', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Panel_Settings-mobile', 'skin': 'simplyred', 'namespace': 'default'})
    
        widgets["default-glassic"] = new basenavigate("default-glassic", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Glassic', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Panel_Settings-mobile', 'skin': 'glassic', 'namespace': 'default'})
    
        widgets["default-zen"] = new basenavigate("default-zen", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Zen', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Panel_Settings-mobile', 'skin': 'zen', 'namespace': 'default'})
    
        widgets["default-obsidian"] = new basenavigate("default-obsidian", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Skin Change', 'title2': 'Obsidian', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-gear'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'dashboard': 'Panel_Settings-mobile', 'skin': 'obsidian', 'namespace': 'default'})
    
        widgets["default-kitchen-radio-volume-favourite"] = new baseslider_thin("default-kitchen-radio-volume-favourite", "", "default", {'widget_type': 'baseslider_thin', 'entity': 'input_number.kitchen_speaker_volume_favourite', 'post_service': {'service': 'input_number/set_value', 'entity_id': 'input_number.kitchen_speaker_volume_favourite'}, 'fields': {'title': 'Kitchen Favourite Volume', 'title2': '', 'SliderValue': '', 'MinValue': '', 'MaxValue': '', 'sliderValue': '', 'minValue': '', 'maxValue': '', 'StepValue': ''}, 'icons': [], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'minvalue_style': 'color: #fff;', 'maxvalue_style': 'color: #fff;', 'value_style': 'color: #00aaff;', 'slider_style': '', 'widget_style': 'background-color: #444;'}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-volume-favourite"] = new baseslider_thin("default-bedroom-radio-volume-favourite", "", "default", {'widget_type': 'baseslider_thin', 'entity': 'input_number.bedroom_speaker_volume_favourite', 'post_service': {'service': 'input_number/set_value', 'entity_id': 'input_number.bedroom_speaker_volume_favourite'}, 'fields': {'title': 'Bedroom Favourite Volume', 'title2': '', 'SliderValue': '', 'MinValue': '', 'MaxValue': '', 'sliderValue': '', 'minValue': '', 'maxValue': '', 'StepValue': ''}, 'icons': [], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'minvalue_style': 'color: #fff;', 'maxvalue_style': 'color: #fff;', 'value_style': 'color: #00aaff;', 'slider_style': '', 'widget_style': 'background-color: #444;'}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-1"] = new baseselect_thin("default-kitchen-radio-station-preset-1", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p1', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p1'}, 'fields': {'title': 'Kitchen Radio Preset 1', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-1"] = new baseselect_thin("default-bedroom-radio-station-preset-1", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p1', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p1'}, 'fields': {'title': 'Bedroom Radio Preset 1', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-2"] = new baseselect_thin("default-kitchen-radio-station-preset-2", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p2', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p2'}, 'fields': {'title': 'Kitchen Radio Preset 2', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-2"] = new baseselect_thin("default-bedroom-radio-station-preset-2", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p2', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p2'}, 'fields': {'title': 'Bedroom Radio Preset 2', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-3"] = new baseselect_thin("default-kitchen-radio-station-preset-3", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p3', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p3'}, 'fields': {'title': 'Kitchen Radio Preset 3', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-3"] = new baseselect_thin("default-bedroom-radio-station-preset-3", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p3', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p3'}, 'fields': {'title': 'Bedroom Radio Preset 3', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-4"] = new baseselect_thin("default-kitchen-radio-station-preset-4", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_p4', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_p4'}, 'fields': {'title': 'Kitchen Radio Preset 4', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-bedroom-radio-station-preset-4"] = new baseselect_thin("default-bedroom-radio-station-preset-4", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.bedroom_radio_station_p4', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.bedroom_radio_station_p4'}, 'fields': {'title': 'Bedroom Radio Preset 4', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-station-preset-dog"] = new baseselect_thin("default-kitchen-radio-station-preset-dog", "", "default", {'widget_type': 'baseselect_thin', 'entity': 'input_select.kitchen_radio_station_pdog', 'post_service': {'service': 'input_select/select_option', 'entity_id': 'input_select.kitchen_radio_station_pdog'}, 'fields': {'title': 'Dog Work Day Station', 'inputoptions': [], 'selectedoption': ''}, 'icons': [], 'css': {}, 'static_icons': {}, 'static_css': {'title_style': 'color: #fff;', 'select_style': 'background-color: #999;color:black;', 'widget_style': 'background-color: #444;', 'selectcontainer_style': ''}, 'namespace': 'default'})
    
        widgets["default-kitchen-radio-volume-dog"] = new baseslider_thin("default-kitchen-radio-volume-dog", "", "default", {'widget_type': 'baseslider_thin', 'entity': 'input_number.kitchen_speaker_volume_dog', 'post_service': {'service': 'input_number/set_value', 'entity_id': 'input_number.kitchen_speaker_volume_dog'}, 'fields': {'title': 'Dog Work Day Volume', 'title2': '', 'SliderValue': '', 'MinValue': '', 'MaxValue': '', 'sliderValue': '', 'minValue': '', 'maxValue': '', 'StepValue': ''}, 'icons': [], 'css': {}, 'static_icons': [], 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'minvalue_style': 'color: #fff;', 'maxvalue_style': 'color: #fff;', 'value_style': 'color: #00aaff;', 'slider_style': '', 'widget_style': 'background-color: #444;'}, 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basenavigate("default-load-main-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Home', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'fa-home', 'dashboard': 'Home-mobile', 'namespace': 'default'})
    
        widgets["default-load-familyroom-panel"] = new basenavigate("default-load-familyroom-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Familyroom', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-windows'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-windows', 'dashboard': 'Panel_FamilyRoom-mobile', 'namespace': 'default'})
    
        widgets["default-load-theatre-panel"] = new basenavigate("default-load-theatre-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Theatre', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-theater'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-theater', 'dashboard': 'Panel_Theatre-mobile', 'namespace': 'default'})
    
        widgets["default-load-bedroom-panel"] = new basenavigate("default-load-bedroom-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Bedroom', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-bed'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'fa-bed', 'dashboard': 'Panel_Bedroom-mobile', 'namespace': 'default'})
    
        widgets["default-load-sensors-panel"] = new basenavigate("default-load-sensors-panel", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Sensors', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-gauge'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-gauge', 'dashboard': 'Panel_Sensors-mobile', 'namespace': 'default'})
    
        widgets["default-load-weather"] = new basenavigate("default-load-weather", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Weather', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-weather-lightning-rainy'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-weather-lightning-rainy', 'dashboard': 'Panel_Weather-mobile', 'namespace': 'default'})
    
        widgets["default-load-settings"] = new basenavigate("default-load-settings", "", "default", {'widget_type': 'basenavigate', 'fields': {'title': 'Settings', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-settings'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'mdi-settings', 'dashboard': 'Panel_Settings-mobile', 'namespace': 'default'})
    
        widgets["default-reload"] = new basenavigate("default-reload", "", "default", {'widget_type': 'basenavigate', 'command': 'location.reload(true)', 'fields': {'title': 'Reload', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'namespace': 'default'})
    

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