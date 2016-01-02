var azure = require('azure-storage');
var nconf = require('nconf');

export class azureBlobRepository
{
  constructor()
  {
    nconf.env().file({ file: 'server/app/config.json', search: true });

  }

  public saveToBlob(id: number, content: any)
  {
    console.log("Before Service Created" + id + "content: "+ content);
    try
    {
      var connectionString = nconf.get("AZURE_STORAGE_CONNECTION_STRING");
      console.log(connectionString);
      var blobSvc = azure.createBlobService(connectionString);
      blobSvc.createContainerIfNotExists('blogs', null, function(error, result, response){
          if(!error)
          {
              // if result = true, container was created.
              // if result = false, container already existed.
              console.log("Container Result: " + result);
              blobSvc.createBlockBlobFromText('blogs', id + '.html', content.post, null, (error, result, response) =>
              {
                if(!error)
                {
                  // file uploaded
                  console.log("File Result: " + JSON.stringify(result));

                }
                else
                {
                  console.log("Failed to create blob " + JSON.stringify(error));
                }
              });
          }
          else
          {
            console.error("Failed to create container: " + error);
          }
      });


    }
    catch (err)
    {
      console.log("Something blew up" + err);

    }

  }
}
