$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Weather");
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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><div data-bind="attr: {style: sub_style}">	<p class="secondary-info" data-bind="text: dark_sky_daily_low_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="text: dark_sky_daily_high_temperature"></p>	<p class="secondary-info" data-bind="attr: {style: main_style}">&nbsp;Feel:</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature, attr: {style: main_style}"></p>	<p class="secondary-info">&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_low_apparent_temperature"></p>	<p class="secondary-info">/</p>	<p class="secondary-info" data-bind="html: dark_sky_daily_high_apparent_temperature"></p>	<br>	<p class="secondary-info">Precip:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">%</p>	<p class="secondary-info">&nbsp;(</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">mm)</p></div></div></li>', 12, 3, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-summary" id="default-summary"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 1, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-hourly-summary" id="default-hourly-summary"><h1 class="error" data-bind="text: error"></h1></div></li>', 8, 2, 5, 5)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-minutely-summary" id="default-minutely-summary"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 1, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-daily-summary" id="default-daily-summary"><h1 class="error" data-bind="text: error"></h1></div></li>', 8, 2, 5, 7)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-weather-frame" id="default-weather-frame"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 12, 9, 1, 9)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-visibility" id="default-visibility"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 1, 18)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-storm-distance" id="default-storm-distance"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 5, 18)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-storm-direction" id="default-storm-direction"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 9, 18)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-humidity" id="default-humidity"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 1, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-wind-speed" id="default-wind-speed"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 5, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseerror-default-wind-direction" id="default-wind-direction"><h1 class="error" data-bind="text: error"></h1></div></li>', 4, 2, 9, 20)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 23)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-familyroom-panel" id="default-load-familyroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 23)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-theatre-panel" id="default-load-theatre-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 23)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-bedroom-panel" id="default-load-bedroom-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 23)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-sensors-panel" id="default-load-sensors-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 1, 26)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-weather" id="default-load-weather"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 4, 26)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-load-settings" id="default-load-settings"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 7, 26)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basenavigate-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 3, 3, 10, 26)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-rss-weather"] = new baserss("default-rss-weather", "", "default", {'widget_type': 'baserss', 'entity': 'rss_weather_alerts', 'fields': {'title': '', 'title2': '', 'text': '', 'description': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'text_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;font-size: 75%;'}, 'css': {}, 'icons': [], 'static_icons': [], 'widget_style': 'font-size: 75%;', 'interval': 30, 'namespace': 'default'})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_icon': '', 'dark_sky_temperature': '', 'dark_sky_daily_low_temperature': '', 'dark_sky_daily_high_temperature': '', 'dark_sky_apparent_temperature': '', 'dark_sky_daily_low_apparent_temperature': '', 'dark_sky_daily_high_apparent_temperature': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;font-size: 125%;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;font-size: 75%;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C', 'widget_style': 'font-size: 75%;', 'namespace': 'default'})
    
        widgets["default-summary"] = new baseerror("default-summary", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-hourly-summary"] = new baseerror("default-hourly-summary", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-minutely-summary"] = new baseerror("default-minutely-summary", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-daily-summary"] = new baseerror("default-daily-summary", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-weather-frame"] = new baseiframe("default-weather-frame", "", "default", {'widget_type': 'baseiframe', 'fields': {'title': 'Radar', 'frame_src': '', 'img_src': '', 'frame_style': ''}, 'icons': [], 'static_css': {'title_style': 'color: #fff;background-color: rgba(0, 0, 0, 0.5);', 'widget_style': 'background-color: #444;'}, 'css': {}, 'static_icons': [], 'refresh': 300, 'img_list': ['https://radblast.wunderground.com/cgi-bin/radar/WUNIDS_map?station=WSO&brand=wui&num=10&delay=100&type=C0R&frame=0&scale=1.000&noclutter=0&showstorms=5&mapx=400&mapy=240&centerx=400&centery=240&transx=0&transy=0&showlabels=1&severe=0&rainsnow=1&lightning=1&smooth=0&rand=25206986&lat=0&lon=0&label=you'], 'namespace': 'default'})
    
        widgets["default-visibility"] = new baseerror("default-visibility", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-storm-distance"] = new baseerror("default-storm-distance", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-storm-direction"] = new baseerror("default-storm-direction", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-humidity"] = new baseerror("default-humidity", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-wind-speed"] = new baseerror("default-wind-speed", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
        widgets["default-wind-direction"] = new baseerror("default-wind-direction", "", "default", {'widget_type': 'baseerror', 'fields': {'error': "Unable to find widget type 'sensor_small'"}, 'static_css': {'widget_style': ''}})
    
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
    ha_status(stream_url, "Weather", widgets);

});