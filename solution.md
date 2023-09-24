problem: _How should the backend code be present(in terms of folder-structure) to integrate new third-party hiring platforms/softwares which will have similar/different functionality from the existing third-party hiring platform integrations but have different API routes?_

solution: 

#### Folder structure

```js
src
  |-- common/
  |   |-- constants/
  |   |-- helpers/
  |   |-- middlewares/
  |       |-- auth.middleware.ts        // Authentication middleware
  |       |-- error.middleware.ts       // Error handling middleware
  |
  |-- candiadtes/
  |   |-- dtos/
  |   |-- candiadtes.service.ts           // Candidates service
  |   |-- candiadtes.controller.ts        // Candidates controller
  |   |-- candiadtes.schema.ts            // Schema for Candidates
  |
  |-- jobs/
  |   |-- dtos/
  |   |-- jobs.service.ts          // jobs related service
  |   |-- jobs.controller.ts       // jobs related controller
  |   |-- jobs.schema.ts           // Schema for jobs data
  |
  |-- other modules...
  |
  |-- server.js

```

#### Explaination:

> _Folder Structure_
1. the src folder will hold the logic based on modules/feature lvl folders
2. each folder will hold all the components and logic related to that feature alone(example candidates/stages modules)
3. each module will mainly comprise below folders:
    - DTOs - all the interfaces involved to that feature alone
    - similarly for the remaining three files(service, controller & schema) as well
4. the things which are shared across multiple modules will be put within the common folder


> _Code Structure_

1. Code Reusability & DRY: 
    1. For Interfaces: 
        - interfaces with similar logic can be extended from common interfaces. 
        - Ex_1: A platform level `user` inteface can be made and can be used to create interfaces for direct-Applicant(if any present on our platform) and client(company with job-posting); both of which are extended from the base level interface
        - Ex_2: The similar logic can be used to create payload/argument interfaces/dtos by extending base level interfaces

    2. Module Level:
        - Similarly common logic is written once and shared accross the modules when-ever required

2. Code Extensibility:
    1. Example Service File(candidates.service.ts):
        - ```js
          import { 
            VARS // object prepared from .env variables
          } from "common/VARS" 

          export const createCandidate(payload, [token]) {

            // Determine the API route based on the provider in the payload
            switch (payload.providerType) {
              // this can also be reused via a common helper func
              case 'GREEN_HOUSE':
                apiRoute = VARS.GREENHOUSE.BASE_URL + VARS.GREENHOUSE.CANDIDATES;
                break;
              case 'HIRE_LEVER':
                apiRoute = VARS.HIRE_LEVER.BASE_URL + VARS.HIRE_LEVER.OPPORTUNITIES;
                break;
              case 'WORKABLE':
                apiRoute =  VARS.WORKABLE.BASE_URL + VARS.WORKABLE.OPPORTUNITIES;
                break;
              default:
                throw new Error('Invalid provider specified in the payload');
            }

            // make the POST API Call here...

          };

          // getApprovedCandidates_func... 

          // getRejectedCandidates_func ...

          // replaceCandidate_func...

          ```

        - In the above example, the common functionality from each provider can be differentiated based on the payload to perform the required action based on the service function.

        - If in some scenario, a certain functionality is only present in a third-party hiring platform then a separate service function can be created within a relatable/relevant feature folder.
