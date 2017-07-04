AFRAME.registerComponent
('page_back',
	{
		init: function () 
		{
			history.back();
		}
	}
);