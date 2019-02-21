function basecalendar(widget_id, url, skin, parameters)
{
    // Will be using "self" throughout for the various flavors of "this"
    // so for consistency ...
    
    self = this
    
    // Initialization
    
    self.widget_id = widget_id
    
    // Store on brightness or fallback to a default
        
    // Parameters may come in useful later on
    
    self.parameters = parameters
       
    var callbacks = []

    // Define callbacks for entities - this model allows a widget to monitor multiple entities if needed
    // Initial will be called when the dashboard loads and state has been gathered for the entity
    // Update will be called every time an update occurs for that entity
     
    self.OnStateAvailable = OnStateAvailable
    self.OnStateUpdate = OnStateUpdate

    var monitored_entities =  []

    if ("entity" in parameters)
    {
        monitored_entities.push({"entity": parameters.entity, "initial": self.OnStateAvailable, "update": self.OnStateUpdate})
    }

    // Finally, call the parent constructor to get things moving
    
    WidgetBase.call(self, widget_id, url, skin, parameters, monitored_entities, callbacks)  

    // Function Definitions
    
    // The StateAvailable function will be called when 
    // self.state[<entity>] has valid information for the requested entity
    // state is the initial state
    // Methods

    function OnStateAvailable(self, state)
    {    
        set_value(self, state)
    }
 
    function OnStateUpdate(self, state)
    {
        set_value(self, state)
    }

    function set_value(self, state)
    {
        // show the next 5 calendar events, trimmed to 38 characters (stripping off sorting date from front)
        value = state.state.split("', '");  
        
        
        self.set_field(self, "value1", value[1].substring(6,43))
        self.set_field(self, "value2", value[2].substring(6,43))
        self.set_field(self, "value3", value[3].substring(6,43))
        self.set_field(self, "value4", value[4].substring(6,43))
        if (value[0] != "000000")
        {
            self.set_field(self, "state_text", value[0].substring(6,43))
            value[5] =  ""
        }
        self.set_field(self, "value5", value[5].substring(6,43))
    }
}