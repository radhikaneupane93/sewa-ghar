const Index = ({ links }: { links: { title: string, path: string }[] }) => {
    return (
        <div>
            {
                links.map(item => {
                    return (
                        <>
                            <div className='font-semibold text-blue-900 mt-3'>{item.title}</div>
                            <div className='mt-2 w-[100%] text-xs flex flex-col gap-2'>
                                <div className='w-[100%] hover:bg-blue-800 hover:text-white cursor-pointer text-[16px] pl-4 flex items-center bg-blue-900 h-16 rounded-md'>{item.path}</div>
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
}

export default Index;
