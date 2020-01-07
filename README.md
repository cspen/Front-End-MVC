# Front-End-MVC
A JavaScript implementation of the model-view-controller architecture

This was a code experiment for single page application architecture. The
idea is to capture all events in a single controller/view. It works but
the problem is there is no way to resume propagation once you stop
propagation.

For example, suppose I have anchor tags in my app. Some anchors I want
to behave as normal links. Others I want to do some in-app processing. To
achieve this I capture all anchor tag events and stop propagation. This works
fine for anchors I want to process. However, if the anchor is to be treated like
a normal link (no in-app processing) I would have to code the link action
myself because there's no way to resume propagation.

I abandoned this idea but I may return to it because I feel like there
is something interesting here.
