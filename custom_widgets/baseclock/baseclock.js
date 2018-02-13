function baseclock(widget_id, url, skin, parameters)
{
    // Will be using "self" throughout for the various flavors of "this"
    // so for consistency ...
    
    self = this
    
    // Initialization
    
    self.widget_id = widget_id
    
    // Parameters may come in useful later on
    
    self.parameters = parameters
    
    // Define callbacks for on click events
    // They are defined as functions below and can be any name as long as the
    // 'self'variables match the callbacks array below
    // We need to add them into the object for later reference
   
    var callbacks = []        
     
    // Define callbacks for entities - this model allows a widget to monitor multiple entities if needed
    // Initial will be called when the dashboard loads and state has been gathered for the entity
    // Update will be called every time an update occurs for that entity
     
    var monitored_entities = []
    
    // Finally, call the parent constructor to get things moving
    
    WidgetBase.call(self, widget_id, url, skin, parameters, monitored_entities, callbacks)  

    // Function Definitions
    
    // The StateAvailable function will be called when 
    // self.state[<entity>] has valid information for the requested entity
    // state is the initial state
    
	updateTime(self)
	
	setInterval(updateTime, 500, self);

	function updateTime(self) 
	{
		var today = new Date();
		h = today.getHours();
		m = today.getMinutes();
		s = today.getSeconds();
		m = formatTime(m);
		mth = today.getMonth()
		day = today.getDate()
        self.set_field(self, "date", today.toLocaleDateString());
		
		if (mth == 0)
		{
			mth = "January"
		}
		else if (mth == 1)
		{	
			mth = "February"
		}			
		else if (mth == 2)
		{	
			mth = "March"
		}			
		else if (mth == 3)
		{	
			mth = "April"
		}			
		else if (mth == 4)
		{	
			mth = "May"
		}			
		else if (mth == 5)
		{	
			mth = "June"
		}			
		else if (mth == 6)
		{	
			mth = "July"
		}			
		else if (mth == 7)
		{	
			mth = "August"
		}			
		else if (mth == 8)
		{	
			mth = "September"
		}			
		else if (mth == 9)
		{	
			mth = "October"
		}			
		else if (mth == 10)
		{	
			mth = "November"
		}			
		else if (mth == 11)
		{	
			mth = "December"
		}			
		date = mth + " " + day;
		self.set_field(self, "date", date);

		if ("time_format" in self.parameters && self.parameters.time_format == "24hr")
		{
			time = h + ":" + m;
			pm = ""
		}
		else
		{
			time = formatHours(h) + ":" + m;
			pm = " " + formatAmPm(h)
		}
		
		if ("show_seconds" in self.parameters && self.parameters.show_seconds == 1)
		{
			time = time + ":" + formatTime(s)
		}
		
		time = time + pm
		self.set_field(self, "time", time);
	}

	function formatTime(i)
	{
		if (i < 10 )
		{
			return "0" + i;
		}
		else
		{
			return i;
		}
	}

	function formatAmPm(h)
	{
		if (h >= 12)
		{
			return "PM";
		}
		else
		{
			return "AM";
		}
	}

	function formatHours(h)
	{
		if (h > 12)
		{
			return h - 12;
		}
		else if (h == 0)
		{
			return 12;
		}
		else
		{
			return h;
		}
	}
}