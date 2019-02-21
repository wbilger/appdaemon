function baserss_combo(widget_id, url, skin, parameters)
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
    self.OnSubStateAvailable = OnSubStateAvailable
    self.OnSubStateUpdate = OnSubStateUpdate
    
    var monitored_entities =  []

    if ("entity" in parameters)
    {
        monitored_entities.push({"entity": parameters.entity, "initial": self.OnStateAvailable, "update": self.OnStateUpdate})
    }
    if ("sub_entity" in parameters && parameters.sub_entity != "")
    {
        monitored_entities.push({"entity": parameters.sub_entity, "initial": self.OnSubStateAvailable, "update": self.OnSubStateUpdate})
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

    function OnSubStateAvailable(self, state)
    {    
        set_subvalue(self, state)
    }
 
    function OnStateUpdate(self, state)
    {
        set_value(self, state)
    }

    function OnSubStateUpdate(self, state)
    {
        set_subvalue(self, state)
    }

    function set_value(self, state)
    {
        self.story = 0
        clearTimeout(self.timer)
        show_next_story(self)
        self.timer = setInterval(show_next_story, self.parameters.interval * 1500, self);
    }

    function set_subvalue(self, state)
    {
        self.story = 0
        clearTimeout(self.timer2)
        show_next_substory(self)
        self.timer2 = setInterval(show_next_substory, self.parameters.interval * 1341, self);
    }

    function show_next_story(self)
    {
        var stories = self.entity_state[parameters.entity].feed.entries;
        self.set_field(self, "text", stories[self.story].title)
        self.story = self.story + 1;
        if ((self.story >= stories.length) || ("recent" in parameters && self.story >= parameters.recent))
        {
            self.story = 0;
        }
        
    }
    function show_next_substory(self)
    {
        var stories = self.entity_state[parameters.sub_entity].feed.entries;
        self.set_field(self, "text", stories[self.story].title)
        self.story = self.story + 1;
        if ((self.story >= stories.length) || ("recent" in parameters && self.story >= parameters.recent))
        {
            self.story = 0;
        }
        
   }
}