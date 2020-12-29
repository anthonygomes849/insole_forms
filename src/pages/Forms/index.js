import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import api from '../../services/apiDev';
export default function Forms() {
  const formsJSON = useCallback(async () => {
    try {
      const {data} = await api.get(
        '/api/forms/findOne?filter={"where":{"target":"credito","name":"PF-credito"}}',
        {
          headers: {
            Authorization:
              'eyJraWQiOiJKZ1Y0ODU5bkIxb2hBODB2T29VeWc0Wmt1QWRSY0lrWWIxVUhXR2ZcL3FFRT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5MGQ0Y2Y5OC1lZTVmLTRlZjktYWJmMS1kY2M1MjE2ZDBmYWYiLCJldmVudF9pZCI6IjlkOThiNzcyLTE0MWYtNDNhZi1iODIzLTk0YzE4OWNlNGNiZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDg1NzQxODksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yXzh3bWhtR21kRyIsImV4cCI6MTYwOTI1MjM3NCwiaWF0IjoxNjA5MjQ4Nzc0LCJqdGkiOiI4YjdiMTNkZC1iZGRhLTQzOWItOWQ5Zi0yZWJmNWMzMWI4MDkiLCJjbGllbnRfaWQiOiJzYWQ2bGt2Z2NmbDh2YThlMjQyYWF2dWgzIiwidXNlcm5hbWUiOiI5MGQ0Y2Y5OC1lZTVmLTRlZjktYWJmMS1kY2M1MjE2ZDBmYWYifQ.LBF7PrqCYRl5wMd3ohhrGoMWlqOunIiC6LLVTRybwmsI0LLYnIEkXZw3rHWiFG2BGE7QRg2PKs65k_n5QFbYKxkPjuzAQwM7GTTrZd2xtlthuWkf2aJ03Z7imHnqWglif0NhzQ4uniP5AJXqWdsIXm9rGwHGFPuD38pXhXRQY6vPiDwPVzugzVMNDwgSMuan-Eo2mI8RVS6lcdq5Yo1zj2js3i8Iv33LOZvwqD_HbYEkUA7-_VO-YKdk5oOwDPS49xQrtEnMKQ4u4J7xcpPPlK7vuUT__dEs4JVP3PJso85Jhe9tpdKZysCdc4XRQZe0ktsbN9iMKLhhkjRwy_SHOQ',
          },
        },
      );

      console.log(data.template.sections);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    formsJSON();
  }, [formsJSON]);
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
}
