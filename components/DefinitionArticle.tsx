import React from 'react'

interface DenifitionArticleProps {
    definition: string;
    title: string;
    image?: string;
    type: string;
}

const DefinitionArticle: React.FC<DenifitionArticleProps> = ({ definition, title, image, type }) => {

    return (<article className='flex flex-row justify-between border-b border-opacity-40 border-maintext p-10 w-full'>
        {/* <CryptocurrencyArt className='mx-auto' /> */}
        <div className='w-3/4'>
            <h2 className="text-3xl font-serif"> {title} </h2>
            <span className='text-md font-light italic'>
                <ul className='list-inside flex space-x-3'>
                    <li className='list-item list-disc'>{type}</li>
                </ul>
            </span>
            <p className='pt-3 pl-2'>
                {definition}
            </p>
        </div>
    </article>);
}

export default DefinitionArticle;