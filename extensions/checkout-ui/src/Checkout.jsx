import {
  useApi,
  useTranslate,
  reactExtension,
  useCartLines,
  useCustomer,
} from '@shopify/ui-extensions-react/checkout';
import { BlockStack, Button, Choice, ChoiceList, Image, InlineStack } from '@shopify/ui-extensions/checkout';

import { useEffect, useState } from 'react';
import { useAppFetch } from '../../../web/frontend/hooks/useAppFetch';
import { useAppQuery } from '../../../web/frontend/hooks';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);


function Extension() {
  const url = 'https://origin-paste-characteristics-township.trycloudflare.com'
  const translate = useTranslate();
  const lines = useCartLines();
  const myCustomer = useCustomer();
  const [selectedCarts, setSelectedCarts] = useState([])


  const { extension } = useApi();


  // const getSavedCart = useAppFetch(url)
  // console.log('getSavedCart:', getSavedCart);

  const myInit = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const myCall = useAppQuery('/getAllData', myInit)



  const callSave = async () => {
    const res = await myCall()
    const dataResponse = await res.json()

    // fetch('apps/api/getAllCart', { method: 'GET' })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle the data received from the server
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Yes Error:', error);
    //   });
  }

  return (
    <InlineStack>

      <ChoiceList
        name="choiceMultiple"
        value={['']}
        allowMultiple
        onChange={(value) => setSelectedCarts(value)}
      >
        <BlockStack>
          {lines.map(item => <Choice key={`${item.id}.choice`} id={item.merchandise.id}>
            {item.merchandise.title}
            <Image source={item.merchandise.title} />
            {/* <Image source={item.merchandise.image.url}/> */}
            );
          </Choice>
          )}
        </BlockStack>
      </ChoiceList>
      <Button
        disabled={!selectedCarts.length || selectedCarts.length === 1}
        onPress={() => {
          console.log('onPress event');
          callSave()
        }}
      >
        Save
      </Button>
    </InlineStack>
  );
}