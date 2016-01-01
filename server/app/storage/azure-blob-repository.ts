var azure = require('azure-storage');
var nconf = require('nconf');

export class azureBlobRepository
{
  constructor()
  {
    nconf.env().file({ file: 'app/config.json', search: true });

  }

  public saveToBlob(id: number, content: any)
  {
    console.log("Before Service Created" + id + "content: "+ content);
    try
    {
      var connectionString = nconf.get("AZURE_STORAGE_CONNECTION_STRING");
      var blobSvc = azure.createBlobService(connectionString);
      blobSvc.createContainerIfNotExists('blogs', {publicAccessLevel : 'blob'}, function(error, result, response){
          if(!error)
          {
              // if result = true, container was created.
              // if result = false, container already existed.
          }
      });

      blobSvc.createBlockBlobFromText('blogs', id + '.html', content.post, null, (error, result, response) =>
      {
        if(!error)
        {
          // file uploaded
        }
        else
        {
          console.log("Failed to create blob " + JSON.stringify(error));
        }
      });
    }
    catch (err)
    {
      console.log("Something blew up" + err);

    }

  }
}
