import { ImageSlider } from '@/components/image-slider';
import { clientSideFunction } from '@/utils/client-utils';
// import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
  // const result = serverSideFunction();
  const clientResult = clientSideFunction();
  return (
    <>
      {/* <h1>Server Route</h1> */}
      {/* <p>{result}</p> */}
      <div>clientResult</div>
      {/* <ImageSlider /> */}
    </>
  );
}
