field_collection_div_id
=======================

This is a Drupal module.

Do you want to create anchors to the field collection items on your node page? 
For instance, to load field collection data in a light box? 

This module overrides the field collection template to give each field collection 
instance an html id. It also conveniently displays these ids in the field collection 
embedded widget so they are visible in the node edit form.

It also creates a ckeditor plugin that lets you create a link to an arbitrary anchor
and assign arbitrary classes, because both the default link plugin and the linkit plugin
make this ridiculously difficult.

Requires:
- _wysiwyg_ (currently a dependency, though not really)
- _field collection_ (obvs)

Plays nicely with:
- _mb_ (i.e. More Buttons, for the Save-and-continue functionality)
- _fancybox_ (works to display div content in a lightbox by html id, as opposed to lightbox2 which re-renders the whole page)
