import Image from 'next/image'
import styles from './index.module.css'

export default function SingleImage() {
    return (
        <div className="w-80 h-96 flex flex-col rounded-xl" >
            <Image className='rounded-xl' alt="Image" src={'https://spoonacular.com/recipeImages/632660-312x231.jpg'} width={370} height={45}/>
            <div className='pt-4'>
                <p className="text-start text-2xl">Smash Hamburger</p>
                <p className='text-start text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora similique ullam architecto commodi et.</p>
            </div>
        </div>
    )
}