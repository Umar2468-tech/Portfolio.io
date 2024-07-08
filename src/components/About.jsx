import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='w-full h-full max-w-screen-lg px-4 flex flex-col justify-center mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, dolores maxime sit est ab fuga et, quod aliquam aliquid fugiat assumenda mollitia. Alias repellendus provident distinctio sapiente exercitationem nemo dicta. Illum eius sequi perspiciatis sunt qui ullam ut, commodi fuga unde possimus soluta quidem voluptas eligendi earum, laborum sapiente rerum.</p> <br />

            <p className='text-xl mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis illo, dicta recusandae excepturi atque hic aspernatur iste ex obcaecati placeat, dolorem accusamus voluptatem id laborum sequi! Sit pariatur earum numquam doloremque quaerat officia deserunt nostrum, fugit laborum quis dolore aspernatur sunt, excepturi quam, dolorum debitis? Dolorem harum explicabo perspiciatis.</p>
        </div>
    </div>
  )
}

export default About