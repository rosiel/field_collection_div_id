CKEDITOR.plugins.add( 'anchorLink', 
{
  init: function( editor )
  {
    editor.addCommand( 'makeAnchorLink', new CKEDITOR.dialogCommand( 'anchorLinkDialog' ) );
	editor.ui.addButton( 'anchorLink', 
		{
		  label: 'Insert link to Anchor',
		  command: 'makeAnchorLink',
		  icon: this.path + 'images/anchor.gif',
		});

  }
} );


CKEDITOR.dialog.add( 'anchorLinkDialog', function ( editor )
{
  return {
	  title: 'Link Properties',
	  minWidth: 400,
	  minHeight: 200,
	  contents: 
	  [
	    {
            id : 'general',
	        label : 'Settings',
	        elements : [
{
    type: 'html',
    html: 'This lets you link to an anchor element in this page.'
},
{
    type: 'text',
    id : 'target',
    label : 'id of target',
    validate: CKEDITOR.dialog.validate.notEmpty( 'The ID of target text cannot be empty.' ),
    required: true, 
    commit : function( data )
    {
        data.target = this.getValue();
    }
},
{
    type: 'text',
    id: 'classes',
    label: 'CSS classes',
    commit : function( data )
    {
        data.classes = this.getValue();
    }
}
    ]
		}
	  ],
      onOk : function() {
        var dialog = this,
        data = {},
        link = editor.document.createElement( 'a' );
        this.commitContent( data );
        selection = editor.document.getSelection().getSelectedText();

        link.setAttribute( 'href', data.target );
        link.setAttribute( 'class', data.classes );

        link.setHtml( selection );
        editor.insertElement( link );
      }
  };
		
});
